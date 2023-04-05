package com.inti.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.inti.model.Offre;

@Repository
public interface IOffreRepository extends JpaRepository<Offre, Integer>{


//	@Query(value = "select * from Offre where id=:id and type_bien =:type_bien and adresse=:adresse and ville=:ville and prix=:prix and surface=:surface and nb_piece=:nb_piece and meuble=:meuble and ascenceur=:ascenceur and parking=:parking", nativeQuery = true)
//	List<Offre> rechercheOffre(@Param ("id") int id, @Param ("type_bien") String type_bien, @Param ("adresse") String adresse, @Param ("ville") String ville, @Param ("prix") double prix, 
//			@Param ("surface") double surface, @Param ("nb_piece") int nb_piece, @Param ("meuble") boolean meuble, @Param ("offre") boolean offre, @Param ("exterieur") boolean exterieur,
//			@Param ("croquis") String croquis, @Param ("note") String note);
//
//	@Query(value = "select * from Offre where  offre=:offre", nativeQuery = true)
//	List<Offre> rechercheAchatLocation(@Param ("offre") String offre);
//	
//	@Query(value = "select * from Offre where  ville=:ville and type_bien=:type_bien", nativeQuery = true)
//	List<Offre> rechercheOffreVilleType_bien(@Param ("ville") String ville, @Param ("type_bien") String type_bien);
//	
//	@Query(value = "select * from Offre where  surface=:surface and nb_piece=:nb_piece", nativeQuery = true)
//	List<Offre> rechercheOffreSurface(@Param ("surface") double surface,  @Param ("nb_piece") int nb_piece);

}
