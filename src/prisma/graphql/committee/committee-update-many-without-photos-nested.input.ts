import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeCreateWithoutPhotosInput } from './committee-create-without-photos.input';
import { Type } from 'class-transformer';
import { CommitteeCreateOrConnectWithoutPhotosInput } from './committee-create-or-connect-without-photos.input';
import { CommitteeUpsertWithWhereUniqueWithoutPhotosInput } from './committee-upsert-with-where-unique-without-photos.input';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';
import { CommitteeUpdateWithWhereUniqueWithoutPhotosInput } from './committee-update-with-where-unique-without-photos.input';
import { CommitteeUpdateManyWithWhereWithoutPhotosInput } from './committee-update-many-with-where-without-photos.input';
import { CommitteeScalarWhereInput } from './committee-scalar-where.input';

@InputType()
export class CommitteeUpdateManyWithoutPhotosNestedInput {

    @Field(() => [CommitteeCreateWithoutPhotosInput], {nullable:true})
    @Type(() => CommitteeCreateWithoutPhotosInput)
    create?: Array<CommitteeCreateWithoutPhotosInput>;

    @Field(() => [CommitteeCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => CommitteeCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<CommitteeCreateOrConnectWithoutPhotosInput>;

    @Field(() => [CommitteeUpsertWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => CommitteeUpsertWithWhereUniqueWithoutPhotosInput)
    upsert?: Array<CommitteeUpsertWithWhereUniqueWithoutPhotosInput>;

    @Field(() => [CommitteeWhereUniqueInput], {nullable:true})
    @Type(() => CommitteeWhereUniqueInput)
    set?: Array<CommitteeWhereUniqueInput>;

    @Field(() => [CommitteeWhereUniqueInput], {nullable:true})
    @Type(() => CommitteeWhereUniqueInput)
    disconnect?: Array<CommitteeWhereUniqueInput>;

    @Field(() => [CommitteeWhereUniqueInput], {nullable:true})
    @Type(() => CommitteeWhereUniqueInput)
    delete?: Array<CommitteeWhereUniqueInput>;

    @Field(() => [CommitteeWhereUniqueInput], {nullable:true})
    @Type(() => CommitteeWhereUniqueInput)
    connect?: Array<CommitteeWhereUniqueInput>;

    @Field(() => [CommitteeUpdateWithWhereUniqueWithoutPhotosInput], {nullable:true})
    @Type(() => CommitteeUpdateWithWhereUniqueWithoutPhotosInput)
    update?: Array<CommitteeUpdateWithWhereUniqueWithoutPhotosInput>;

    @Field(() => [CommitteeUpdateManyWithWhereWithoutPhotosInput], {nullable:true})
    @Type(() => CommitteeUpdateManyWithWhereWithoutPhotosInput)
    updateMany?: Array<CommitteeUpdateManyWithWhereWithoutPhotosInput>;

    @Field(() => [CommitteeScalarWhereInput], {nullable:true})
    @Type(() => CommitteeScalarWhereInput)
    deleteMany?: Array<CommitteeScalarWhereInput>;
}
